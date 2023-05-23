import os
import shutil

path = "C:\\Users\\mrlog\\Desktop\\my website\\king_tech\\src\\images" 
i = 0
files = os.listdir(path)
lis = [img.split('.')[-1] for img in os.listdir(path)]
for fil in files:
    i +=1
    extension = fil.split(".")[-1]    
    if not os.path.isfile(os.path.join(path,f"img{str(i)}.{extension}")):
        os.rename(os.path.join(path,fil), os.path.join(path,  f"img{str(i)}.{extension}" ))   
       




