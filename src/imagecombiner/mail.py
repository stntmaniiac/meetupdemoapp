import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
from email.MIMEBase import MIMEBase
from email import encoders
 
fromaddr = "stntmaniiac@gmail.com"
toaddr = "acharyademocrat57@gmail.com"
 
msg = MIMEMultipart()
 
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "SUBJECT OF THE EMAIL"
 
body = "TEXT YOU WANT TO SEND"
 
msg.attach(MIMEText(body, 'plain'))
 

 
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(fromaddr, "Stntmaniiac@1234")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
server.quit()