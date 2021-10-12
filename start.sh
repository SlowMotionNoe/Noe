
#!/bin/sh
while true
do
supervisor -s kev.js
echo "Si desea detener completamente el proceso del servidor ahora, presione Ctrl + Z antes que termine el tiempo...."
echo "Reiniciando en:"
for i in 5 4 3 2 1
do
echo "$i..."
sleep 1
done
echo "Sistema Reiniciado!"
done
