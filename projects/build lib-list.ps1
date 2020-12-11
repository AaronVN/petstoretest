ng build lib-list --prod
cd ../dist/lib-list
npm link
cd ../../
Remove-item ./package-lock.json
npm link lib-list
ng serve