#include <stdio.h>
#include <stdlib.h>

#include <editline/readline.h>
#include <editline/history.h>

int main (int argc, char** argv) {
  puts("ctrl+c to quit\n");

  while (1) {
    char* input = readline("> ");
    add_history(input);
    printf("you said %s", input);
    free(input);
  }

  return 0;
}
