
### Try on Heroku

You can also give it a try using Heroku in one click!

<a href="https://heroku.com/deploy?template=https://github.com/hoadq-1371/backend-api">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

Be aware that the Content Type Builder won't work due to the restriction of writing files on the Heroku servers. If you would like to change/edit/add Content Types, you need to follow these steps:

1. Click the button above and deploy your app
2. Clone that repo by using `heroku git:clone -a` followed by your repo's name
3. Go into the cloned projects' folder using `cd` followed by your repo's name
4. Add the Heroku boilerplate as a remote by running `git remote add boilerplate https://github.com/hoadq-1371/backend-api`
5. Pull from this new origin by running `git pull boilerplate master`
