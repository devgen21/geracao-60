@echo off
set app="gen60plushml"

mkdir "../dist"
cd "../dist"

git init .

call heroku login
call heroku create %app%
call heroku git:remote -a %app%
call heroku addons:destroy heroku-postgresql --confirm %app%
call heroku addons:create heroku-postgresql:hobby-dev -a %app%

git pull heroku master
xcopy /e /y /q "../gen" . 

git add .
git commit -am "Atualizacao do Deploy"
git push heroku master
cd ..
rd /s /q "dist"