---
layout:  post
title: Stripe Simple Form
categories: [stripe]
tags: [stripe,2015]
published: True
date: 2015-05-01 15:37:12
---

A simple stripe form.

1 - First off we need the raw / endraw tags : https://github.com/herereadthis/redwall/issues/18
2 - Add the Stripe js file and javascript/jquery code to the head.html

3 - require_once('path/to/stripe-php/init.php');

4 - Call to undefined function Stripe\curl_init()
= add php5 curl



{% raw %}
<h1>Charge $10 with Stripe</h1>
<form action="" method="POST" id="payment-form">
  <span class="payment-errors"></span>

  <div class="form-row">
    <label>
      <span>Card Number</span>
      <input type="text" size="20" data-stripe="number"/>
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>CVC</span>
      <input type="text" size="4" data-stripe="cvc"/>
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Expiration (MM/YYYY)</span>
      <input type="text" size="2" data-stripe="exp-month"/>
    </label>
    <span> / </span>
    <input type="text" size="4" data-stripe="exp-year"/>
  </div>

  <button type="submit">Submit Payment</button>
</form>
{% endraw %}