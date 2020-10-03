int add_stuff (int a, int b) {
  int res = a + b;
  return res;
}

typedef struct {
  int a;
  int b;
} point;

point p;
p.a = 1;
p.b = 2;

float l = sqrt(p.a * p.b + p.a * p.b);
