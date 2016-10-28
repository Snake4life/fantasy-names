cd "$(dirname "$0")/../generators"

echo -e "<select class=\"nametype\">"
for type in `find -type d ! -path . ! -path '*.min.js' -printf "%f\n"`; do
	pretty=${type//_/ }
	pretty="$(echo $pretty | sed 's/.*/\L&/; s/[a-z]*/\u&/g')"
	echo -e "\t<option value=\"$type\">$pretty</option>"
done
echo -e "</select>"

echo -e "\n"

for type in `find -type d ! -path . ! -path '*.min.js' -printf "%f\n"`; do
	echo -e "<select class=\"namelist\" id=\"$type\">"
	for list in `find $type -type f ! -path '*.min.js' -printf "%f\n"`; do
		list=${list//.js/}
		pretty=${list//_/ }
		pretty="$(echo $pretty | sed 's/.*/\L&/; s/[a-z]*/\u&/g')"
		echo -e "\t<option value=\"$list\">$pretty</option>"
	done
	echo -e "</select>"
done