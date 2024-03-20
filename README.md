# Keycloak Script Mapper for transforming LDAP_ID values to upper case

When using LDAP for user federation in Keycloak, the ObjectGUID attribute is automatically mapped into the `LDAP_ID` user attribute in Keycloak.

However, the UUID can be upper case in the LDAP directry, while Keycloak stores it lower case. When using LDAP for synchronizing users into applications and OIDC for authentication, some applications ([Nextcloud](https://github.com/nextcloud/user_saml/issues/563#issuecomment-1215519305)) case sensitive and can therefore not map the OIDC user to the LDAP user object.

This OIDC script mapper transforms the LDAP_ID attribute into upper case.

# Install

Clone this repo and run the build.sh script. Then copy the resulting `ldap-id-uppercase.jar` file into the `providers` directory of your Keycloak application. Then run the `build.sh` command.
