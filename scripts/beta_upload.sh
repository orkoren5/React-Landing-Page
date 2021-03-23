git add . && git commit -m "$1" && git push origin beta && npm run-script build && firebase hosting:channel:deploy beta
