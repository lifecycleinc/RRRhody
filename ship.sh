npm run build
cd public
git init
git add .
git commit -m "deploy"
git remote add origin https://github.com/lifecycleinc/rrrhody/
git push -f origin master
rm -rf .git
cd ..
