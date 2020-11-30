import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
    ADMIN = 'ADMIN',
    GUEST = 'GUEST',
}

export enum AppResources {
    USER = 'USER',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
    .grant(AppRoles.GUEST)
    .readAny(AppResources.USER, '*, !email, !phoneNumber, !password')
    .grant(AppRoles.ADMIN)
    .extend(AppRoles.GUEST)
    .createAny(AppResources.USER)
    .updateAny(AppResources.USER)
    .deleteAny(AppResources.USER);
