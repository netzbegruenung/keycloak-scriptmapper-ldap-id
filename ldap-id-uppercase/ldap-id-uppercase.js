var ldap_id_uppercase = "";
if ( user && user.getAttributeStream("LDAP_ID") ) {
  ldap_id_uppercase = user.getAttributeStream("LDAP_ID").toUpperCase();
  print("LDAP_ID: " + ldap_id_uppercase)
} else {
  print("LDAP_ID attribute does not exist")
}

exports = ldap_id_uppercase;
