# Doit - A Simple Todo for Developers with Side Project

## OCD

Doit is a simple todo for peoples who work with a side project. Following are the main features of Doit. You can save your profile that how much time you can spend on your side projects per day. You can Add projects with status that you are doing it or not and then you can create boards in your projects it comes with three boards do, doing done. Add tasks to you boards, migrate it to other boards.  It also lists all the possible tasks you should do on specific day.

## SRD

1. Set our Profile - Name, Time to Spend
2. Add project With Status - Doing or not, name, time you want to spend on this project
3. Add Boards
4. Add Tasks With tags
5. Add Tags with Properties - color
6. Add Tasks to Boards with Properties like - Priorities, Name, Time to Take Money to Take
7. Move tasks around the board
8. Delete Projects
9. Delete Tasks

## SRS

#### Create A Profile

```json
// Profile.json
{
    "name": "Akash Chaudhari",
    "time": 270
}
```

```bash
$ doit set profile
name :
time : 
```

##### List

```bash
$ doit show profile
```



#### Project

Project Data Structure

```json
// Projects.json
{
    "doit_version": 1.0.0,
    "projects": [
    	{
    		id: 1242332,
    		doing: true,
    		default: false, 
    		time: 120,
    		name: "Project X"
		},
		{
            id: 123232,
            default: true,
            doing: false,
            time: 30,
            name: "Projext Y"
        }
    ]
}
```

##### Add Project

```bash
$ doit add project <project name>
time: 120
```

##### Delete Project

```bash
$ doit delete project
[1] Project One
[2] Project Two
which ? 
```

##### List Project

```bash
$ doit list project
```



#### Setting a Default Project

You can Set Any Project a Default Project like This

```bash
$ doit set default
[1] Project One
[2] Project Two
which ?
```

##### list

```bash
$ doit show default
```





#### Boards

Task Data Structure

```bash
// 123212.json
{
	"do" : [
		{
			id: 12121,
			name: "TaskA",
			time: 12,
			cost: 14,
			tags: ["green", "yellow"]
		}
	],
	"doing": [
		{
			id: 12121,
			name: "TaskA",
			time: 12,
			cost: 14,
			tags: ["green", "yellow"]
		},
		{
			id: 12121,
			name: "TaskA",
			time: 12,
			cost: 14,
			tags: ["green", "yellow"]
		}
	],
	"done": [
		{
			id: 12121,
			name: "TaskA",
			time: 12,
			cost: 14,
			tags: ["green", "yellow"]
		}
	]
}
```



##### Add task

```bash
$ doit add task 'TaskA' 'TaskB'
time [Task A]: 120
cost [Task A]: 55
tags [Task A]: a,b,c
```

##### Delete Task

```bash
$ doit delete task <name-of-board>
[1] TaskA
[2] TaskB
which [eg. 1,2,3] ?
```

##### Moving Task

```bash
$ doit move <do> <doing>
[1] TaskA
[2] TaskB
which [eg. 1,2,3] ?
```

##### List

```bash
$ doit list task <board>
```



#### Tags

Tag Things for Visual Griping and Searching

##### Add

```bash
$ doit add tag 'a' 'b'
color [a]: green
color [b]: green
```

##### Delete

```bash
$ doit delete tag
[1] A
[2] B
which [eg. 1,2,3] ?
```

##### list

```bash
$ doit show tags
```





#### Boards

Add or Remove Boards

##### Add

```bash
$ doit add board ui kd
count as done Tasks (ui) [y/N]?
count as done Task (ki) [Y/N]?
```

##### Remove 

```bash
$ doit delete board
[1] A
[2] B
which [eg. 1,2,3] ?
```

##### list

```bash
$ doit show boards
```



## List of Task to Maintain

```bash
$ doit set profile -- done
$ doit add tag 'a'  -- done
$ doit delete tag --done
$ doit show tags --done
$ doit add project -- done

$ doit set default
$ doit set doing



$ doit add task 'TaskA' 'TaskB'	
$ doit add board ui kd

$ doit move <do> <doing>

$ doit delete board
$ doit delete task <name-of-board>
$ doit delete project

$ doit show boards
$ doit show task <board>
$ doit show default
$ doit show project 
$ doit show profile
```

