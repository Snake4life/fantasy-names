for file in `find ../generators/ -type f -regex '.*\.js$' ! -path '*.min.js'`; do
	echo $file
	#js-beautify -f $file -o $file -t
	#uglifyjs $file -o ${file/.js/.min.js} -c -m
done