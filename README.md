## Test_rimraf

Testing out the node.js package [rimraf](https://github.com/isaacs/rimraf), and [bloging about it](https://dustinpfister.github.io/2017/05/14/nodejs-rimraf/).

I wrote a post on this back in may of this year (2017), and becuase it seems that it is getting a bit of traffic thought that my post deserves an update, and maybe even a corresponding git hub repo, so here it is.

## Installing the test project

No way am I going to pollute the npmjs name space with this, if you actualy want if for some reason clone it in with git from here.

```
$ git clone https://github.com/dustinpfister/test_rimraf
$ cd test_rimraf
$ npm install
```

## 1) Make files, list files, rimraf the files

In the test_rimraf folder are make.js, list.js, and rimraf.js scripts.  There is also my plain.js script that I made just to get a feel of how big of a deal it is to make something like is from the floor up in node.js.

Use the make script to create a source folder that has a bunch of *.txt files in it. Once that is done use the list script that will list the contents of that folder if it is there. Finnaly use the rimraf script to clear the source folder of all *.txt files.

```
$ node make
$ node list
[ 'test_1.txt',
  'test_11.txt',
  'test_3.txt',
  'test_5.txt',
  'test_7.txt',
  'test_9.txt' ]
$ node rimraf
done
$ node list
[]
```

Thats the basic deal with rimraf.