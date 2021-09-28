set aa=你好！世界
echo 替换前:%aa%
echo 替换后:%aa:世界=中国%
echo aa=%aa%
echo %aa%
set aa=%aa:世界=中国%
echo aa=%aa% 