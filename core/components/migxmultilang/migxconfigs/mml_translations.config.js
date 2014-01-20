{
  "id":4,
  "name":"mml_translations",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"Document",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"mml_pagetitle",
          "caption":"Pagetitle",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"mml_longtitle",
          "caption":"Longtitle",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":5,
          "field":"mml_introtext",
          "caption":"Summary (introtext)",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"textarea",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"mml_content",
          "caption":"Content",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"textarea",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"",
  "actionbuttons":"",
  "columnbuttons":"update",
  "filters":"[]",
  "extended":{
    "migx_add":"",
    "formcaption":"[[+Lang_language]]",
    "update_win_title":"",
    "win_id":"mml_translations",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"",
    "packageName":"migxmultilang",
    "classname":"mmlLang",
    "task":"translations",
    "getlistsort":"",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"translations",
    "gridload_mode":2,
    "check_resid":"0",
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "cmpmaincaption":"MIGX Languages",
    "cmptabcaption":"Languages",
    "cmptabdescription":"Manage Language-settings here",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":2,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":"false",
      "show_in_grid":"0",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":1,
      "header":"[[%mml.language]]",
      "dataIndex":"language",
      "width":90,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-01-06 11:40:47",
  "editedby":1,
  "editedon":"2014-01-20 11:05:29",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-01-06 01:00:00",
  "publishedby":0
}