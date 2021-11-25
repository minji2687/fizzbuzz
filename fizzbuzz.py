def do_fizzbuzz():
    """
    Do fizzbuzz with for and if
    While i goes up 1 to 15,
    print 'fizz' if i is times of 3(done)
    print 'buzz' if i is times of 5
    print 'fizzbuzz' if i is times of 15
    else, print i (string)
    """
    for i in range(1,15+1):
        if i%3==0:
            print('fizz')
        elif i%5==0:
            print('buzz')
        else:
            print('{}'.format(i))
    return True


if __name__=='__main__':
    do_fizzbuzz()