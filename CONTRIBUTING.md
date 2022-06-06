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
Fork the repo.
![image](https://user-images.githubusercontent.com/32241933/172265231-af0b9d5b-319a-4d8e-b02a-6128d1653f32.png)

Clone your newley forked repo into Visual Studio Code using the HTTP URL found when pressing the green code button.
![image](https://user-images.githubusercontent.com/32241933/172265363-a7828729-d670-41a9-a973-74a42ef14dd9.png)

![image](https://user-images.githubusercontent.com/32241933/172265425-f062b8a2-0f27-4c78-8edf-2fd289f316d8.png)

Make your changes.

Press the Git button and push your changes.
![image](https://user-images.githubusercontent.com/32241933/172265784-9f0ae2e4-ffb0-451a-9f60-329b317aeb61.png)

Press Contribute and follow the steps to create a pull request.
![image](https://user-images.githubusercontent.com/32241933/172265961-adb7dcf0-4018-4698-aeba-9f86bc5a4013.png)

Congratulations, You now have contributed to the site repo unless your changes are denied or you need to make more changes.
