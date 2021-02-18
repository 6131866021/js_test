#!/bin/sh
# Example for use of GNU gettext.
# This file is in the public domain.
#
# Script for regenerating all autogenerated files.

if test -r ../Makefile.am; then
  # Inside the gettext source directory.
  GETTEXT_TOPSRCDIR=../../..
else
  if test -r ../Makefile; then
    # Inside a gettext build directory.
    GETTEXT_TOOLS_SRCDIR=`sed -n -e 's,^top_srcdir *= *\(.*\)$,\1,p' ../Makefile`
    # Adjust a relative top_srcdir.
    case $GETTEXT_TOOLS_SRCDIR in
      /*) ;;
      *) GETTEXT_TOOLS_SRCDIR=../$GETTEXT_TOOLS_SRCDIR ;;
    esac
    GETTEXT_TOPSRCDIR=$GETTEXT_TOOLS_SRCDIR/../..
  else
    # Installed under ${prefix}/share/doc/gettext/examples.
    . ../installpaths
  fi
fi

cp -p ${ACLOCALDIR-$GETTEXT_TOPSRCDIR/gettext-runtime/m4}/nls.m4 m4/nls.m4
cp -p ${ACLOCALDIR-$GETTEXT_TOPSRCDIR/gettext-runtime/m4}/po.m4 m4/po.m4
cp -p ${ACLOCALDIR-$GETTEXT_TOPSRCDIR/gettext-runtime/m4}/progtest.m4 m4/progtest.m4
cp -p ${GETTEXTSRCPODIR-$GETTEXT_TOPSRCDIR/gettext-runtime/po}/remove-potcdate.sin po/remove-potcdate.sin

aclocal -I m4

autoconf

automake -a -c

cd po
for f in *.po; do
  if test -r "$f"; then
    lang=`echo $f | sed -e 's,\.po$,,'`
    msgfmt -c -o $lang.gmo $lang.po
  fi
done
cd ..
