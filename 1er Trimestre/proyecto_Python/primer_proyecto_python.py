print("hola")

num = 1
while num <= 5:
    print(num)
    num += 1

def suma(num1,num2):
    result = num1 + num2
    return result

num1 = int(input("Ingrese un numero: "))
num2 = int(input("Ingrese un segundo numero: "))
print("La suma es", suma(num1,num2)) 