# Contributing

Thank you for contributing to this repository, before submitting any changes please read our general guidelines [here](https://github.com/hullcss/contributing)  

There are many ways to get started. This guide assumes you have both `git` and `gh` installed on your system

## Via the Command Line

### Using Git

click on the `fork` button on the repo page  
In your terminal type `git clone https://github.com/hullcss/hullcss-site-jet`  

### Using [GitHub CLI](https://cli.github.com/)  

Tn your terminal type
`gh repo fork hullcss/hullcss-site-jet`  

### Making your changes

Once the repo has been forked and is on your system, you'll want to create a new branch with a name detailing what your branch is. An example would be  

```git
git branch fixing-dead-links
git checkout fixing-dead-links
````  

Open up the files you want to change in your favourite text editor or IDE and commit your changes  

```git
git add -A
git commit -m "your-commit-message-here"
git push --set-upstream origin your-branch-name
```

note: `--set-upstream origin testing` is only required if you have not already made a contribution. All pushes outside of your first can be done through a plain `git push`  

you can then use the `gh repo create` command to make a pull request to have your changes reviewed and potentially merged into the main repository.  
You will be given a few prompts, fill them in and enter Submit.  

## Using GitHub's web interface

Guide coming soon