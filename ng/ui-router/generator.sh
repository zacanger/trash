#!/usr/bin/env bash

# generates an index
# touches an app.js, svc.js, and ctrl.js
# links up angular and ui-router from a cdn

set -e

{
  printf "<!DOCTYPE html>\n"
  printf "<html lang=\"en\">\n"
  printf "<head>\n"
  printf "  <meta charset=\"utf-8\">\n"
  printf "  <meta name=\"author\" content=\"Zac Anger\">\n"
  printf "  <title>foo</title>\n"
  printf "  <link rel=\"stylesheet\" type=\"text/css\" href=\"./css.css\">\n"
  printf "</head>\n"
  printf "<body ng-app=\"app\" ng-controller=\"ctrl\">\n"
  printf "  <ui-view></ui-view>"
  printf "  <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.jss.js\"><script>\n"
  printf "  <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.jss.\"><script>\n"
  printf "  <script type=\"text/javascript\" src=\"./app.js\"><script>\n"
  printf "  <script type=\"text/javascript\" src=\"./ctrl.js\"><script>\n"
  printf "  <script type=\"text/javascript\" src=\"./svc.js\"><script>\n"
  printf "</body>\n"
  printf "</html>\n"
} > index.html

touch app.js
touch svc.js
touch ctrl.js
echo "done!"
echo

