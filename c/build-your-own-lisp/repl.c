#include <stdio.h>
#include <stdlib.h>

#ifdef _WIN32
#include <string.h>

static char buffer[2048];

char* readline(char* prompt) {
  fputs(prompt, stdout);
  fgets(buffer, 2048, stdin);
  char* cpy = malloc(strln(buffer) + 1);
  strcpy(cpy, buffer);
  cpy[strln(cpy) - 1] = '\0';
  return cpy;
}

void add_history(char* _) {}

#else

#include <editline/readline.h>
#include <editline/history.h>

#endif

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
