# Unix Commands
- **man ___** - prints manual for command, exit with q
- **cat** - output content to file
- **cd** - change working directory
- **cp** - source target - copy a file, target can be a directory or a file, **-r** recursively copy
- **echo** - `echo [text to print]` or to output to a file `echo [text/other commands] > [file path]` use `>>` to append instead of overwriting
- **ls** - list directory contents, **-a** hidden files, **-l** more detailed
- **mkdir** - make directory, **-p ___** create all directories for a given path
- **mv** source target - move a file
- **ps** - list all processes
- **pwd** prints working directory
- **rm ___** - remove file, **-d ___** remove folder, **-R ___** remove recursively from folder, **\*** all files
- **rmdir** - removes a file directory if it is empty
- **grep** - pattern files - searches file for content, **-r** recursive search, **-E** regular expression, **--include=PATTERN** Recurse in directories only searching file matching PATTERN ex. grep pattern -r, --include=\\\*.cpp --include=\\\*.h rootdir, **--exclude=PATTERN** Recurse in directories skip file matching PATTERN.
- **uname** - gives information about system **-a** gives more info
- **apropos ___** - searches **man** pages that contain the search term(s)
- **pattern matching** - **\*** means any 0 or more characters, **?** means any 1 character
- **filepaths**
    - . current dir
    - .. parent dir
    - / root
    - ~ home


# bash scripting

expression | true when
---|---
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
