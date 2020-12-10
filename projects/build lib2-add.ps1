ng build lib2-add --prod
cd ../dist/lib2-add
npm link
cd ../../
Remove-item ./package-lock.json
npm link lib2-add
ng serve