from turtle import numinput


var_list = ['kucing', 4, 'burung', 2,'ular',5.7, 3, 'kelinci']

print(var_list[-5:])
print(var_list[:4])

for x in range(0,15):
    print(x)
    
number = 7
while number > 0:
    print(number)
    number = number -1
    
print()
for x in range(5):
    if x == '2':
        continue
    
    print(x)