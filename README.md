# Keycloak Script Mapper for transforming `LDAP_ID` values to upper case

When using LDAP for user federation in Keycloak, the ObjectGUID attribute is automatically mapped into the `LDAP_ID` user attribute in Keycloak.

However, the UUID can be upper case in the LDAP directry, while Keycloak stores it lower case. When using LDAP for synchronizing users into applications and OIDC for authentication, some applications ([Nextcloud](https://github.com/nextcloud/user_saml/issues/563#issuecomment-1215519305)) case sensitive and can therefore not map the OIDC user to the LDAP user object.

This OIDC protocol script mapper transforms the `LDAP_ID` attribute into upper case. For details, see the [Keycloak documentation](https://www.keycloak.org/docs/24.0.1/server_development/#_script_providers).

# Install

Clone this repo and run the build.sh script. Then copy the resulting `ldap-id-uppercase.jar` file into the `providers` directory of your Keycloak application. Then run the `build.sh` command.

# Usage

1. Open `Client Scopes` in your realm.
2. Create a new Scope
3. Switch to the `Mappers` tab
4. Choose `Add Mapper` > `By Configuration`
5. Select `LDAP ID uppercase mapper` and set an attribute name.

Then you can use the attribute name in your OIDC client to access the upper case `LDAP_ID`
