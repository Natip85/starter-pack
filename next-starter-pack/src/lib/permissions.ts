import type { UserSelect } from "@/features/auth/auth-types";
import type { UserRole } from "@/server/db/schema";

export type Permissions = {
  users: {
    dataType: Partial<UserSelect>;
    action: "edit" | "view" | "delete" | "block";
  };
};

export type PermissionType = keyof Permissions;

type PermissionCheck<Key extends PermissionType> =
  | boolean
  | ((user: UserSelect, data: Permissions[Key]["dataType"]) => boolean);

type RolesWithPermissions = Record<
  UserRole,
  Partial<{
    [Key in keyof Permissions]: Partial<
      Record<Permissions[Key]["action"], PermissionCheck<Key>>
    >;
  }>
>;

const ROLES: RolesWithPermissions = {
  owner: {
    users: {
      view: true,
      edit: true,
      delete: true,
      block: true,
    },
  },
  admin: {
    users: {
      view: true,
      edit: true,
      block: true,
      delete: true,
    },
  },
  investigator: {
    users: {
      view: true,
      block: true,
    },
  },
  staff: {
    users: {
      view: true,
    },
  },
  paid: {
    users: {
      edit: (user, data) => user.id === data.id,
      view: (user, data) => user.id === data.id,
      delete: (user, data) => user.id === data.id,
    },
  },
  user: {
    users: {
      edit: (user, data) => user.id === data.id,
      view: (user, data) => user.id === data.id,
      delete: (user, data) => user.id === data.id,
    },
  },
  blocked: {},
};

export const hasPermission = <Resource extends PermissionType>(
  user: UserSelect | undefined,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"],
) => {
  if (!user) return false;
  return user.roles.some((role) => {
    const permission = ROLES[role][resource]?.[action];
    if (typeof permission === "function")
      return !!data && permission(user, data);
    return !!permission;
  });
};

export const hasRole = (
  user: UserSelect | undefined,
  role: UserRole | UserRole[],
  exactMatch = false,
) => {
  if (!user) return false;
  if (exactMatch)
    return (
      (Array.isArray(role) ? role : [role]).sort().toString() ===
      user.roles.sort().toString()
    );
  return (Array.isArray(role) ? role : [role]).some((r) =>
    user.roles.includes(r),
  );
};
