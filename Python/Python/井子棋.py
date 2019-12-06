import os


def print_board(board):
    print(board['TL'] + '|' + board['TM'] + '|' + board['TR'])
    print('---+---+---')
    print(board['ML'] + '|' + board['MM'] + '|' + board['MR'])
    print('---+---+---')
    print(board['BL'] + '|' + board['BM'] + '|' + board['BR'])


def main():
    init_board = {
        'TL': '   ', 'TM': '   ', 'TR': '   ',
        'ML': '   ', 'MM': '   ', 'MR': '   ',
        'BL': '   ', 'BM': '   ', 'BR': '   '
    }
    begin = True
    while begin:
        curr_board = init_board.copy()
        begin = False
        turn = 'x'
        counter = 0
        os.system('cls')
        print_board(curr_board)
        while counter < 9:
            while 1:
                move = input('轮到%s走棋, 请输入位置: ' % turn)
                if move not in init_board.keys():
                    os.system("cls")
                    print("输入错误，可选值：" + str(",".join(init_board.keys())))
                    print_board(curr_board)
                else:
                    break
            if curr_board[move] == '   ':
                counter += 1
                curr_board[move] = " " + turn + " "
                if turn == 'x':
                    turn = 'o'
                else:
                    turn = 'x'
            os.system('cls')
            print_board(curr_board)
        choice = input('再玩一局?(yes|no)')
        begin = choice == 'yes'


if __name__ == '__main__':
    main()