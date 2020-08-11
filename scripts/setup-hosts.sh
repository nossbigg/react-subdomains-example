# requires sudo, as need to edit /etc/hosts
# add domains and subdomains to hosts file
echo "" >> /etc/hosts
echo "# Added by react-subdomains-example" >> /etc/hosts
# Valid domains
echo "127.0.0.1     exampledomain1.com" >> /etc/hosts
echo "127.0.0.1     sub1.exampledomain1.com" >> /etc/hosts
echo "127.0.0.1     sub2.exampledomain1.com" >> /etc/hosts
echo "127.0.0.1     anotherexampledomain.com" >> /etc/hosts
# Invalid domains
echo "127.0.0.1     some.sub1.exampledomain1.com" >> /etc/hosts
echo "127.0.0.1     some.anotherexampledomain.com" >> /etc/hosts
echo "" >> /etc/hosts
