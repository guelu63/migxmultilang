if (is_array($row)) {
    $outrow = array();
    foreach ($row as $key => $value) {
        if (substr($key, 0, 4) == 'mml.' && !empty($value)) {
            $tvname = substr($key, 4);
            $outrow[$tvname] = $value;
        }
    }

    $cultureKey = $modx->getOption('cultureKey');
    $main_lang = $modx->getOption('original_cultureKey');
    $base_url = $modx->getOption('base_url');
    
    if ($cultureKey != $main_lang) {

       if ($row['link'] == $base_url){
           $outrow['link'] = '';
       }
       
    }
    

}

return $modx->toJson($outrow);