# Unix Commands
- `man [command]` - prints manual for command, exit with q
- `cat` - output content to file
- `cd` - change working directory
- `chmod` - modifies permissions `chmod [person(s)][+ or -][permissions] [filename]`, `-R` - recursive
    - `U` - user `ug` - group `o` - other
    -  `+` - grant  `-` - revoke
    - `r` - readable `w` - writeable `x` - executable
- `cp` - source target - copy a file, target can be a directory or a file, `-r` recursively copy
- `echo` - `echo [text to print]` or to output to a file `echo [text/other commands] > [file path]` use `>>` to append instead of overwriting
- `ls` - list directory contents, `-a` hidden files, `-l` more detailed
- `mkdir` - make directory, `-p [path]` create all directories for a given path
- `mv` source target - move a file
- `ps` - list all processes
- `pwd` prints working directory
- `rm [file]` - remove file, `-d [folder]` remove folder, `-R [path]` remove recursively from folder, `\` all files
- `rmdir` - removes a file directory if it is empty
- `grep` - `grep "pattern" [files]` - searches file for content, `-r` recursive search, `-E` regular expression, `--include=PATTERN` Recurse in directories only searching file matching PATTERN ex. grep "pattern" -r, --include=\\\*.cpp --include=\\\*.h rootdir, `--exclude=PATTERN` Recurse in directories skip file matching PATTERN.
- `uname` - gives information about system `-a` gives more info
- `apropos [term]` - searches `man` pages that contain the search term(s)
- `pattern matching` - `\` means any 0 or more characters, `?` means any 1 character
- `filepaths`
    - . current dir
    - .. parent dir
    - / root
    - ~ home


# bash scripting

start scripts with `#!/bin/bash`


## comparison

use `[]` around expressions

expression | true when
---|---
`number1 -eq number2` | equals
`number1 -ne number2` | not equals
`number1 -lt number2` | less than
`number1 -le number2` | less than/equals
`number1 -gt number2` | greater than
`number1 -ge number2` | greater than/equals
`string1 = string2` | string1 equals string2
`string1 != string2` | string1 does not equals string2
`-r file` | file exists and is readable
`-w file` | file exists and is writeable
`-d file` | is a directory
`-f file` | is a regular file
`-s file` | is a non empty file (size > 0)
`expression1 -a expression2` | expression1 and expression2 are both true
`expression1 -o expression2` | expression1 or expression2 is true
`! expression1` | expression1 is not true

## piping

`command1 | command2` - input of command 1 is piped into command 2

## variables

```bash
varName = "text"
otherVarName = 'ls *.txt'

echo $varName
```

## control flow 

```bash
# if 
if [ expression ] then
command fi

# if else
if [ expression ] then
command else
command fi

# for loop
for i in $(command)
do
command with $i
done
```

## regex

syntax | meaning
---|---
`.` | any single character 
`[abc]` | any of these characters
`[a-z]` | any characters in this range
`[^abc]` | none of these characters
`[^a-z]` | not a character in this range
`\|` | or
`^` | starts with, example: `^text`
`$` | ends with, example: `txt$`
`?` | zero or one times, example: `demos?123` works: demo123, demos123. doesn't work: demoA123
`*` | zero or more times
`[]` | group
`\s` | white space
`\S` | non-white space
`\w` | word