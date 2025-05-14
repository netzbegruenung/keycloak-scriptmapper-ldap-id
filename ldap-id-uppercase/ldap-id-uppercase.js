var converted_ldap_id = "";
var lower_case_ldap_id = false;

user.getAttributeStream("lower_case_ldap_id").forEach(function(lower_case_ldap_id_attribute) {
  if (lower_case_ldap_id_attribute == "true") {
    lower_case_ldap_id = true;
  }
});

user.getAttributeStream("LDAP_ID").forEach(function(ldap_id) {
  if (lower_case_ldap_id) {
    converted_ldap_id = ldap_id.toLowerCase();
  } else {
    converted_ldap_id = ldap_id.toUpperCase();
  }
  print("Upper Case LDAP_ID: " + converted_ldap_id)
});
exports = converted_ldap_id;
