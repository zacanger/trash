#include <stdio.h>
#include <stdlib.h>

#include "mpc.h"

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
  mpc_parser_t* Number = mpc_new("number");
  mpc_parser_t* Operator = mpc_new("operator");
  mpc_parser_t* Expr = mpc_new("expr");
  mpc_parser_t* Lisp = mpc_new("lisp");

  mpca_lang(MPCA_LANG_DEFAULT,
    " \
      number : /-?[0-9]+/ ;                               \
      operator : '+' | '-' | '*' | '/' ;                  \
      expr     : <number> | '(' <operator> <expr>+ ')' ;  \
      lispy    : /^/ <operator> <expr>+ /$/ ;             \
    ",
    Number, Operator, Expr, Lisp);


  puts("ctrl+c to quit\n");

  while (1) {
    char* input = readline("> ");
    mpc_result_t r;
    add_history(input);
    if (mpc_parse("<stdin>", input, Lisp, &r)) {
      mpc_ast_print(r.output);
      mpc_ast_delete(r.output);
    } else {
      mpc_err_print(r.error);
      mpc_err_delete(r.error);
    }

    free(input);
  }

  mpc_cleanup(4, Number, Operator, Expr, Lisp);
  return 0;
}
