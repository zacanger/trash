# complete git aliases as if they were expanded
if command -v _git > /dev/null; then
  # wraps an alias to perform completion as if it was expanded
  make-completion-wrapper() {
    local function_name="$2"
    local arg_count=$(($#-3))
    local comp_function_name="$1"
    shift 2
    local function="
    $function_name() {
      ((COMP_CWORD+=$arg_count))
      COMP_WORDS=( "$@" \${COMP_WORDS[@]:1} )
      "$comp_function_name"
      return 0
    }"
    eval "$function"
  }

  # registers completion wrapper for an alias
  register-completion-wrapper() {
    local alias_name="$1"
    local alias_cmd="$2"

    make-completion-wrapper _git _git_${alias_name}_mine $alias_cmd
    complete -o bashdefault -o default -o nospace -F _git_${alias_name}_mine "$alias_name"
  }

  # call register-completion-wrapper() for each alias that starts with "git "
  eval "$(alias -p | sed -ne 's/alias \([^=]\+\)='\''\(git [^ ]*\) *.*'\''/register-completion-wrapper '\''\1'\'' '\''\2'\''/p')"
fi
