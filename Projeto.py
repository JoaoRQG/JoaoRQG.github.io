import time
import pyperclip

# Instruções.
print('Pressione Enter para começar a contagem. Em seguida, após a mensagem "Começou", pressione Enter para passar o split.'
      'Pressione Ctrl-c para finalizar.')

input()
print('Começou.')
start_time = time.time()
last_time = start_time
split_num = 1

# Inicialização de cada split.
try:
    while True:
        input()
        split_time = round(time.time() - last_time, 2)
        total_time = round(time.time() - start_time, 2)
        split = 'Split # {} {} ({})'.format((str(split_num)+ ':').ljust(3), str(total_time).rjust(5), str(split_time).rjust(6))
        print(split, end='')
        split_num += 1
        last_time = time.time()     # Reinicia a ultima contagem do split.
        pyperclip.copy(split)       # Duplica o último recorde para a clipboard.
except KeyboardInterrupt:           # Ao pressionar e segurar Ctrl-c, o programa e interrompido.
    
    # Imprimi a finalização da contagem.
    print('\nPronto.')
