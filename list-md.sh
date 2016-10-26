cd "$(dirname "$0")/generators"

for type in `find -type d ! -path . ! -path '*.min.js' -printf "%f\n"`; do
	pretty=${type//_/ }
	pretty="$(echo $pretty | sed 's/.*/\L&/; s/[a-z]*/\u&/g')"
	echo -e "* $pretty:"
	for list in `find $type -type f ! -path '*.min.js' -printf "%f\n"`; do
		list=${list//.js/}
		pretty=${list//_/ }
		pretty="$(echo $pretty | sed 's/.*/\L&/; s/[a-z]*/\u&/g')"
		echo -ne "$pretty, "
	done
	echo -e "..."
done