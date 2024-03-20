var ldap_id_uppercase = "";
user.getAttributeStream("LDAP_ID").forEach(function(ldap_id) {
  ldap_id_uppercase = ldap_id.toUpperCase();
  print("Upper Case LDAP_ID: " + ldap_id_uppercase)
});
exports = ldap_id_uppercase;
