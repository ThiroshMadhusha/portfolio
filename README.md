# Deploy Project
-->> Go to Package.json File.
-->> Uninstall all unnecessary dependencies file.
-->> Uninstall all testing packages and web vitals.
### npm uninstall @testing --- web vitals
-->> Add devDependencies
### npm i gh-pages -D
-->> Add home path above the dependenncy section
### "homepage": "https://ThiroshMadhusha.github.io/portfolio",
-->> Add Scripts
## "predeploy": "npm run build",
## "deploy": "gh-pages -d build",
-->> Save package.json file
-->> Open VS code terminal
-->> Type
### npm run deploy
-->> Sucessfully Deploy Project
