#BMI= wigth(kg)/hieght(m)^2

height,wight=eval(input("请输入身高(m),体重(kg):"))

print('''BMI= wigth(kg)/hieght(m)^2\n
--------------------------\n''')
print("{:^5}|{:^12}|{:^5}".format("分类","国际BMI值","国内BMI值"))
print("{:^5}|{:^15}|{:^5}".format("偏瘦","<18.5","<18.5"))
print("{:^5}|{:^15}|{:^5}".format("正长","18.5~25","18.5~24"))
print("{:^5}|{:^15}|{:^5}".format("偏胖","25~30","24~28"))
print("{:^5}|{:^15}|{:^5}\n".format("肥胖",">=30",">=28"))

BMI=wight/pow(height,2)
print("BMI指数为:{:.2f}".format(BMI))
if BMI<18.5:
    who,nat="偏瘦","偏瘦"
elif 18.5<=BMI<24:
    who,nat="正常","正常"
elif 24<=BMI<=25:
    who,nat="正常","偏胖"
elif 25<=BMI<28:
    who,nat="偏胖","偏胖"
elif 28<BMI<30:
    who,nat="偏胖","肥胖"
elif BMI>=30:
    who,nat="肥胖"

print("国际标准为:{:^5},国内标准为:{:^5}".format(nat,who))

