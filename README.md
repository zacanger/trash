This'll be the meta-repo I'll be using to pull in all the repos I've got cluttering up ~/ (and Github).

For anyone thinking of doing the same thing, this is what I'm doing and why I'm doing it this way:

Started with this (new) repo. This readme is the initial commit. I'll go ahead and add a remote with `git remote add -f 11a https://github.com/zacanger/11a`(fetching at the same time). Then I'll move 11a into it's own subdirectory, and commit that (`git commit -am 'Moving week one day one project a into subdir.`)

After that, I can go ahead and `git remote add -f 11b https://github.com/zacanger/11b`... and so on. It'll take a wee bit, but that way commit history will be preserved, and I won't have several pages of tiny test projects on Github, and I can tarball up this whole darned thing and put it up on a shelf to get dusty, instead of moving thousands of tiny files around for the next however many years.



