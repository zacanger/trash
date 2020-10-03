#include <stdio.h>

static char input[2048];

int main (int argc, char** argv) {
  puts("ctrl+c to quit\n");

  while (1) {
    fputs("> ", stdout);
    // reads input up to \n, up to max size
    fgets(input, 2048, stdin);
    printf("you said %s", input);
  }

  return 0;
}
