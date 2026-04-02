README.pdf: README.md
	pandoc -V geometry:margin=2cm --variable urlcolor=blue $< -o $@

demo.pdf: demo.md
	pandoc -V geometry:margin=2cm --variable urlcolor=blue $< -o $@

demo.md: mkdemo-report.sh
	sh mkdemo-report.sh
