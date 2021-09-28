set aa=hello,world!
echo before:%aa%
echo after:%aa:world=china%
echo aa=%aa%
echo %aa%
set aa=%aa:world=china%
echo aa=%aa% 