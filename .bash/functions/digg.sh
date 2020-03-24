digg() {
  h="$1"
  dig "$h" A "$h" AAAA +short
}
