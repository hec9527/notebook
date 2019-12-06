import jieba

def getText():
    myFile=open("./jiebaEnglish.txt")
    myFile=myFile.read()
    myFile.lower()  
    
    for ch in ".,/\\:;'\"?":
        ch=''

    return myFile

lst=jieba.lcut(getText())
print(lst)




