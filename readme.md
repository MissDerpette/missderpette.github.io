# My Website 2022 

## Push Code

```bash
git add .
git commit -m "Commit Message"
git push origin main
```

## Deploy in Github Pages
To Deploy in: missderpette.github.io

```bash
# check "git remote -v"
# if REMOTE deploy is not yet there 
git remote add deploy git@github.com:MissDerpette/missderpette.github.io.git 

# if REMOTE already added
git add . 
git commit -m "Deploying To Website"
git push deploy main 
```

## Create Branch

```bash
git checkout -b $BRANCH_NAME

git branch -a # Check All Branches 
```

## Check Remote

```bash
git remote -v 
```



