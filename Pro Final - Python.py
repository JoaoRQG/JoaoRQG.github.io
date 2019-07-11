{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1046{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.18362}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang22 # Add all the files in this folder to the ZIP file.\par
w for filename in filenames:\par
newBase = os.path.basename(folder) + '_' #Changed\par
if filename.startswith(newBase) and filename.endswith('.zip')\par
continue # don't backup the backup ZIP files\par
backupZip.write(os.path.join(foldername, filename))\par
backupZip.close()\par
print('Done.')\par
backupToZip('C:\\\\delicious')\par
import logging\par
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')\par
logging.debug('Start of program')\par
def factorial(n):\par
logging.debug('Start of factorial(%s%%)' % (n)) # Changed\par
total = 1\par
for i in range(1, n + 1):\par
total *= i\par
logging.debug('i is ' + str(i) + ', total is ' + str(total))\par
return total\par
logging.debug('End of factorial(%s%%)' % (n)) # Changed\par
print(factorial(5))\par
logging.debug('End of program')\par
# Find the URL of the comic image.\par
comicElem = soup.select('#comic img')\par
if comicElem == []:\par
print('Could not find comic image.')\par
else:\par
comicUrl = \lquote http:\rquote  + comicElem[0].get('src') #Changed\par
# Download the image.\par
print('Downloading image %s...' % (comicUrl))\par
res = requests.get(comicUrl)\par
res.raise_for_status()\par
}
 